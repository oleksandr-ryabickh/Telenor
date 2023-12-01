pipeline {
  agent any
    stages {
        stage('Clone Git repository') {
            steps {
                checkout scm
            }
        }

        stage('Configuration') {
            steps {
                sh 'npm config set registry https://registry.npmjs.org/'
                sh 'npm install'
            }
        }

        stage('Run tests') {
            steps {
                sh "npx cypress run --env allure=true --reporter mocha-allure-reporter"
                sh "npx allure generate allure-results --clean -o allure-report"
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