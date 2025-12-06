pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: "${BRANCH_NAME}", url: 'https://github.com/Balajiccc/devops-build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh './build.sh'
            }
        }

        stage('Push to DockerHub') {
            steps {
                script {
                    if (BRANCH_NAME == "dev") {
                        sh 'docker tag yourdockerhubusername/devops-react:latest yourdockerhubusername/dev:latest'
                        sh 'docker push yourdockerhubusername/dev:latest'
                    } else if (BRANCH_NAME == "master") {
                        sh 'docker tag yourdockerhubusername/devops-react:latest yourdockerhubusername/prod:latest'
                        sh 'docker push yourdockerhubusername/prod:latest'
                    }
                }
            }
        }
    }
}
