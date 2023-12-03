pipeline {
    agent any
    tools {nodejs "NodeJS"}
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
                bat "npx cypress run --env allure=true"
            }
        }

        stage('Publish Reports') {
            steps{
                allure([
                    includeProperties: false,
                    properties: [],
                    reportBuildPolicy: 'ALWAYS',
                    results: [[path: './allure-results']],
                    report: "allure-report"
                ])
            }
        }
    }
}