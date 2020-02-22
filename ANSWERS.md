- [ ] Why would you use class component over function components (removing hooks from the question)?
In my opinion the lifcycle methods give us more controll over how and when functions or api calls get fired within our app. Also we get all the methods from the parent React.component that the class is extended from.

- [ ] Name three lifecycle methods and their purposes.
componentDidMount is a method that will only once and only fires after the component mounts. Used to apply functions or api calls only after the component renders. 
componentDidUpdate is a method that fires every time state is updated great for making api calls that change when state changes.
componentWillUnmount is a method that fires upon a component unmounting and used for any clean up needed.

- [ ] What is the purpose of a custom hook?
The puropse of a custom hook that it can be used multiple times keeping our code dry while giving use the power to handle statful logic in an efficent manner.

- [ ] Why is it important to test our apps?
It is important to test apps so that we can be confident in our code when it comes time for production. 