pipeline {
    agent any

    environment {
        IMAGE_NAME = "three-tier-app"
        IMAGE_TAG  = "${env.GIT_COMMIT?.take(7) ?: 'latest'}"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Secret Scan — Gitleaks') {
            steps {
                sh '''
                    docker run --rm \
                      -v $(pwd):/repo \
                      zricethezav/gitleaks:latest \
                      detect --source /repo --verbose || true
                '''
            }
        }

        stage('SAST & Linting') {
            steps {
                sh '''
                    pip install bandit flake8 safety --quiet || true
                    bandit -r . --severity-level medium --exclude ./.git,./venv || true
                    flake8 . --max-line-length=120 --exclude=.git,__pycache__,venv || true
                    safety check --full-report || true
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-credentials',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh """
                        echo \$DOCKER_PASS | docker login -u \$DOCKER_USER --password-stdin
                        docker build -f backend/Dockerfile -t \$DOCKER_USER/${IMAGE_NAME}:${IMAGE_TAG} ./backend
                        docker tag \$DOCKER_USER/${IMAGE_NAME}:${IMAGE_TAG} \$DOCKER_USER/${IMAGE_NAME}:latest
                    """
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-credentials',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh """
                        docker push \$DOCKER_USER/${IMAGE_NAME}:${IMAGE_TAG}
                        docker push \$DOCKER_USER/${IMAGE_NAME}:latest
                    """
                }
            }
        }

        stage('Deploy with Helm') {
            steps {
                sh """
                    helm upgrade --install three-tier-app . \
                      -f values.yaml \
                      --set image.tag=${IMAGE_TAG} \
                      --namespace three-tier-app \
                      --create-namespace
                """
            }
        }
    }

    post {
        success {
            echo "Pipeline succeeded — image: ${IMAGE_NAME}:${IMAGE_TAG}"
        }
        failure {
            echo "Pipeline failed — check logs above"
        }
    }
}
