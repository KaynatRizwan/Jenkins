pipeline{

    agent any
    stages{
        stage ('build'){
            steps {
                sh 'npm install'
            }
        }
        stage ('test'){
            steps {
                sh 'Echo test is running'
            }
        }
        stage ('deploy'){
            steps {
                sh 'echo "deploying the application'
            }

        }
    }
}
