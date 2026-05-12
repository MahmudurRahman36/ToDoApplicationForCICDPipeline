1. Context
You are a DevOps engineer in a software company that develops a React application. The team currently performs manual testing and build processes before deployment, which is time-consuming and prone to human error. The company wants to improve efficiency and reliability using automation.

2. Task
Your task is to design and implement a CI/CD pipeline using GitHub Actions that automatically runs when code is pushed to the development branch. The pipeline must use a self-hosted runner instead of GitHub-hosted runners.

3. Instructions
* Create a GitHub Actions workflow file (.github/workflows/ci.yml)
* Trigger workflow on push to development branch
* Use a self-hosted runner
* Install dependencies
* Run tests
* Build the React application
* Ensure proper YAML structure with jobs and steps
* Include clear and maintainable configuration
* In one server we have to deploy the react app along with postgre database and nginx. While in other server we have to run the self-hosted runner.
* Both server will be in AWS and will be Ubuntu 24.04.
* You can take GitHub secrets for DB_PASSWORD, EC2_HOST, EC2_SSH_KEY, EC2_USER.
* Server information given below:

Server Name: mahmud-batch11-selfhosted-runner
Instance ID: i-06d5d69a1b317a1bf
Public IPv4 address: 65.0.94.198
Private IPv4 addresses: 10.0.5.250


Server Name: mahmud-batch11-application
Instance ID: i-049a9009a297fb295
Public IPv4 address: 13.233.204.205
Private IPv4 addresses: 10.0.8.97


4. Requirements
* CI/CD pipeline must run automatically on every push to development
* Must use self-hosted runner
* Must successfully build a React application
* Must support debugging via GitHub Actions logs
* Must follow proper GitHub Actions architecture (workflow, * jobs, steps, runners)
* There will be two server. In one server the self-hosted runner will run and in other server the React application will run along with postgre database and nginx.
* Both server will be in AWS and will be Ubuntu 24.04
* You can take GitHub secrets for DB_PASSWORD, EC2_HOST, EC2_SSH_KEY, EC2_USER.
* Server information given below:

Server Name: mahmud-batch11-selfhosted-runner
Instance ID: i-06d5d69a1b317a1bf
Public IPv4 address: 65.0.94.198
Private IPv4 addresses: 10.0.5.250


Server Name: mahmud-batch11-application
Instance ID: i-049a9009a297fb295
Public IPv4 address: 13.233.204.205
Private IPv4 addresses: 10.0.8.97


5. Expected Output
After implementation:
* Pipeline runs automatically on push to development
* Self-hosted runner executes the workflow
* React app builds successfully in CI pipeline
* Logs clearly show execution flow
* Errors can be identified and debugged from workflow logs
* In one server we have to deploy the react app along with postgre database and nginx. While in other server we have to run the self-hosted runner.
* You can take GitHub secrets for DB_PASSWORD, EC2_HOST, EC2_SSH_KEY, EC2_USER.
* Server information given below:

Server Name: mahmud-batch11-selfhosted-runner
Instance ID: i-06d5d69a1b317a1bf
Public IPv4 address: 65.0.94.198
Private IPv4 addresses: 10.0.5.250


Server Name: mahmud-batch11-application
Instance ID: i-049a9009a297fb295
Public IPv4 address: 13.233.204.205
Private IPv4 addresses: 10.0.8.97


6. Deliverables
Provide the following:
* GitHub repository link
* GitHub Actions workflow YAML file
* Screenshot of successful pipeline run
* Screenshot of failed pipeline debugging (if any)
* Short explanation of:
* CI/CD concept
* Self-hosted runner
* Workflow execution process in GitHub Actions