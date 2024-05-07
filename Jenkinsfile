pipeline{

    agent any
    stages{
        stage('Build'){
            steps {
                // sh 'npm install'
                                sh 'echo "test is is running"'

            }
        }
        stage('test'){
            steps {
                sh 'echo "test is running"'
            }
        }
        stage('deploy'){
            steps {
                sh 'echo "deploying the application"'
            }

        }
    }
}
