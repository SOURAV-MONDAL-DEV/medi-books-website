import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-cont'>
            <div>
                <h1>1. what is cors?</h1>
                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

                    An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.

                    For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers. The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers. Modern browsers use CORS in APIs such as XMLHttpRequest or Fetch to mitigate the risks of cross-origin HTTP requests.</p>
            </div>
            <div>
                <h1>2.1 Why I am using firebase?</h1>
                <p>1. Real-time Database Helps to Store and Synchronize Data<br />
                    The cloud-hosted NoSQL database is offered by Firebase real-time database that helps you store and synchronize data between the clients. This indeed makes it easier for the developers to access the data using any of the devices and helps developing collaborative feature.

                    Another advantage of a real-time database for the developers is that they do not need the support of backend to build apps as it comes with SDKs for various platforms, including Android, iOS and Web.

                    It assists in the execution of backend code responding to events activated by databases. Furthermore, it is optimized for offline use too.<br />

                    2. Firebase has Become Smarter with Google Analytics<br />
                    Now you can easily track down your user’s journey on a number of devices. It means you would know whether he is using a smartphone, tablet or laptop.

                    You can also export your mobile app data to BigQuery with the help of Google Analytics. It can further support in engaging more users once you match the UX based on user id.<br />

                    3. Firebase Offers Facility of Crash Reporting to Fix Bugs Quickly<br />
                    It has often been seen that a lot of apps suffer due to bug issues, which tends to slow down navigation speed and users opt out of it. The result is that rating of the app also declines.

                    However, you have to credit Firebase as now it is offering the facility of crash reporting to fix the bugs at the quicker pace and with ease. The app developers and QA testers can identify the problems in the stages, whether it is the app version, the device or the OS.

                    The Firebase SDK provides log crashes that ultimately save much time as you don’t have to find the cause of the problem. The coding database is available for both native and cross-platform apps.<br />

                    4. Fast and Secured Web Hosting<br />
                    The benefit of Firebase Hosting allows you to set-up a single-page, a mobile landing page, web page or progressive web page with ease. It also helps to deliver the content rapidly anywhere.

                    The developers can deploy the web apps as well as static content at CDN (Content Delivery Network).

                    The Firebase hosting also automatically configures the free SSN certificate for custom domains. You can now deploy a local directory to the web with just a single command.<br />

                    5. Firebase Authentication<br />
                    Nowadays, most of the apps have the login facility and the developer aims to simplify and secure it better. Therefore, the support of Firebase Authentication is there to do that task with an easy sign-in process.

                    It also provides identity solution for the emails, passwords and other important apps such as Facebook, Twitter or Instagram. The Firebase UI is also flexible, customized and drop-in dealing with the UI flow of the users. There is no compromise from the security point of view.</p>
                <h1>
                    2.2 What other options I have to implement authentication?
                </h1>
                <h3>1. Parse</h3>
                <h3>2. Back4App</h3>
                <h3>3. AWS Amplify</h3>
                <h3>4. Kuzzle</h3>
                <h3>5. Couchbase</h3>
                <h3>6. NativeScript</h3>
            </div>
            <div>
                <h1>3. How does the private route work?</h1>
                <p> The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.

                    The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.The App component is the root component of the example app, it contains the outer html, main nav and routes for the application.

                    The /login route is public, and the home route (/) is protected by the private route component that uses Redux to check if the user is logged in.

                    The last route is a catch-all redirect route that redirects any unmatched paths to the home page.

                </p>
            </div>
            <div>
                <h1>4. What is Node? How does Node work?</h1>
                <p> Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.

                    Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

                    Node.js basically works on two concept

                    Asynchronous
                    Non-blocking I/O
                    Non-blocking I/o: Non-blocking i/o  means working with multiple requests without blocking the thread for a single request. I/O basically interacts with external systems such as files, databases. Node.js is not used for CPU-intensive work means for calculations, video processing because a single thread cannot handle the CPU works.


                    Asynchronous: Asynchronous is executing a callback function. The moment we get the response from the other server or database it will execute a callback function. Callback functions are called as soon as some work is finished and this is because the node.js uses an event-driven architecture. The single thread doesn’t work with the request instead it sends the request to another system which resolves the request and it is accessible for another request.

                    To implement the concept of the system to handle the request  node.js uses the concept of Libuv.

                    Libuv is an open-source library built-in C. It has a strong focus on asynchronous and  I/O, this gives node access to the underlying computer operating system, file system, and networking.

                    Libuv implements two extremely important features of node.js

                    Event loop
                    Thread pool
                    Event loop: The event loop contains a single thread and is responsible for handling easy tasks like executing callbacks and network I/O. When the program is to initialize all the top-level code is executed, the code is not in the callback function. All the applications code that is inside callback functions will run in the event loop. EventLoop is the heart of node.js. When we start our node application the event loop starts running right away. Most of the work is done in the event loop.

                    Nodejs use event-driven-architecture.

                    Events are emitted.
                    Event loop picks them up.
                    Callbacks are called.
                    Event queue: As soon as the request is sent the thread places the request into a queue. It is known as an event queue. The process like app receiving HTTP request or server or a timer will emit event as soon as they are done with the work and event loop will pick up these events and call the callback functions that are associated with each event and response is sent to the client.

                    The event loop is an indefinite loop that continuously receives the request and processes them. It checks the queue and waits for the incoming request indefinitely.

                    Thread pool: Though node.js is single-threaded it internally maintains a thread pool. When non-blocking requests are accepted there are processed in an event loop, but while accepting blocking requests it checks for available threads in a thread pool, assigns a thread to the client’s request which is then processed and send back to the event loop, and response is sent to the respective client.
                </p>
            </div>
        </div>
    );
};

export default Blog;