pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'weather-app-image'
        DOCKER_TAG = 'v3'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: "main" , url: 'https://github.com/leoimewore/weatherApp.git'
            }
        }
        
        stage('Build') {
            steps {
                sh 'docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .'
            }
        }
        
    }
    
//     post {
//       always {
//       sh 'docker system prune -a -f'
//      }
//   }
}
