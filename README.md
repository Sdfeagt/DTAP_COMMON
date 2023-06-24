# S.C.A.N. (signal and connection analyzer)
This is a repository houses the code used for creating the S.C.A.N. project. The project itself was created as a part of Design Thinking and Advanced Prototyping (DTAP) course at Aalto University.
Information transcribed below showcases the design concept and 4 specializations of the project.

Team members: Beatriz Glaser, Kabir Bissessar, Mimi Määttä, Rafal Ciechanski

## The purpose / unique value of the design concept
### "Automate. Capture. Analyze."

S.C.A.N. has the goal of automating and optimizing the current 5G research scenery. It is designed to be cost and resource efficient, as well as used in combination with automated vehicles (e.g.: self driving cars). Combining the areas of hard- and software, S.C.A.N. is an easy to use IoT device, responsible for recording signal up- and download speeds from different locations, gathering and processing the collected data, and finally displaying it to the user through a web application.

## The architecture of the design concept
### Physical design

In order to make the concept viable, there were a couple of physical requirements that had to be taken into account. The very first ones were being portable and easy to use. As the device is meant to be practical, its implementation had to be portable so that it can easily be interchanged between different vehicles or robots, as well as easily managed by the user (for maintenance for example). Since the device is meant to be driven around, it also had to require little to no input from the driver for safety reasons. Therefore, in order to operate the device the driver simply needs to start the device using one button, and everything else happens automatically. The choice of implementing a single red light to indicate any problems or malfunction also stands from the target user.



### Web app design

The web app was created using NextJS framework in combination with TailwindCSS and Typescript. Due to the nature of constantly updating the data the code is executed on the client side. NextJs 12 was used for this project, so pages, components and API's are all defined in a structure different to the one seen in the newest NextJS 13. Source code for the web app can be found under frontend_v1 directory.

Specific directories under frontend_v1/src and their contents:

* pages - the files in this directory define the layout and functionality of the app in the specific address. The file called "index" is responsible for the root address "/".
* components - Various components that are reused all over the app. database - All API calls are defined in the firebaseDB.tsx file. Data fetching, uploading and authentication are handled using functions defined in this directory.
* styles - Files in this directory were modified in order to enable support for TailwindCSS in this app. As we are using this specific framework, the styling itself can be found in the individual components.

The web app has been designed with a help of a file design_scheme.md that can be found under documents. This file details the colours, fonts and border radiuses to be used in the web app.

Many other libraries were used in this project, such as Chart.js, uuid and firebase.

Live demo can be accessed [here](https://dtap-common.vercel.app/). You can login using the address rafalciechanski15@gmail.com and password admin123.

### Embedded design

The design was built on a Raspberry Pi 3 B+, which is connected to a 4G Hat SIM7600X and a simple circuit with a resistor, a LED light and a push button.

In order to enable the communication between Raspberry Pi and 4G HAT, the following software was needed to be set up on the Raspberry Pi:

* raspi-config 
* minicom
* p7zip-full
* Additionally, Firebase SDK for Python3 was also installed on Raspberry Pi, in order to connect to the Firebase cloud-based platform where all data is stored.

For future development, a display can be added to the circuit and controlled by Raspberry Pi to output the message to users indicating the stage of the collecting and uploading data, a RBG LED light can be used to indicate the status of the device, and lastly a switch can be used instead of a push button.

### Cloud service design

Firebase was chosen for the cloud service, as it contained many features that were useful for the project. 

A Cloud Firestore database was modeled. Since Firebase is easily integrated with Next.js, the web app is able to access the data directly.

A Realtime database was used in addition to capture the live data from the Rasberry Pi. Since in our current prototype, the data is only synced after the device has gathered reading, the Realtime database can be seen as unnecessary. However, it was chosen so that should the device transmit live readings, the Realtime database can handle it.

Firebase authentication was also implemented, so that users can login and sign up using an email address.
