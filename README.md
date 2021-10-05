# Angular_React_Vanilla
This project compares three types of component oriented technologies: Angular, React and Vanilla (pure JS)

# Step 1: Install Global Requirements (Linux):
- Git         => command:   sudo apt install git 
- NodeJs      => command:   sudo apt install nodejs  
- Yarn        => command:   sudo apt install yarn

# Step 2: Download Sources (git clone repository)

mkdir ~/testproject
cd ~/testproject
git clone https://github.com/joelsodias/Angular_React_Vanilla.git

# Setup and Run Angular App

cd ~/testproject/angular-test-app
npm install
ng serve
xdg-open http://localhost:4200

# Setup and Run React app

cd ~/testproject/react-test-app
npm install
npm start
xdg-open http://localhost:3000

# Setup and Run Vanilla app

cd ~/testproject/vanilla-test-app
npm i serve
npx serve


