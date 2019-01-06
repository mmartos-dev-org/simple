pipeline {
  agent any
  stages {
    stage('step #1') {
      parallel {
        stage('step #1') {
          steps {
            echo 'hello'
          }
        }
        stage('step #2') {
          steps {
            echo 'world'
          }
        }
      }
    }
  }
}