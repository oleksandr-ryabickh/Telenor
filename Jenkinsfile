node {
    CYPRESS_DOCKER_PATH = 'docker/Dockerfile'
}

pipeline {
    agent {
          dockerfile {
            filename "${CYPRESS_DOCKER_PATH}"
          }
    }
    stages {
        stage('Clone Git repository') {
            steps {
                checkout scm
            }
        }

        stage('Configuration') {
            steps {
                bat 'npm config set registry https://registry.npmjs.org/'
                bat 'npm install'
            }
        }

        stage('Run tests') {
            steps {
                bat "npx cypress run --env allure=true --reporter mocha-allure-reporter"
                bat "npx allure generate allure-results --clean -o allure-report"
            }
        }

        stage('Publish Reports') {
            steps{
                publishHTML(
                    target: [
                            allowMissing         : false,
                            alwaysLinkToLastBuild: false,
                            keepAll              : true,
                            reportDir            : './allure-report',
                            reportFiles          : 'index.html',
                            reportName           : "Allure Report"
                    ]
                )
            }
        }
    }
}