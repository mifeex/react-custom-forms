# react-custom-forms
## You can use this module for developing forms. 

### Use FormCreator to initial form with input and button.
To create form using **FormCreator** you must use this rules:
- You must give an *array of names as props*.
- You must give *error string as props*. Error string can be empty 
- You must give *function valueHandler as props* which will collect value from form.
- You must give *button name string as props*. Button string **CANNOT BE EMPTY**

#### Example of use:
    <div>
      <FormCreator name={["User Name", "Password"]}
          error="You should use only EN sumbols"
          valueHandler={onChangeValue}
          btnName="Log in"
       />
    </div>

### Use InputFieldComponent to initial input field. 
To initial input you must use this rules:
- You must give *name as props*. Name string can be empty
- You must give *function onDisableHandler as props*. That can be simple arrow function
- You must give *boolean value as props* is button clicked. Value should be **true** else input didn't get value back
- You must give *function sendData as props*. This prop same with *valueHandler* - which will collect value from input.

#### Example of use:
    <div>
      <InputFieldComponent name={""}
          sendData={searchedUsersById}
          onDisableHandler={() => ""}
          isBtnClicked={true}
        />
    </div>

## All forms are using React-Hooks to save and hand data
[React-Hooks](https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies)

Thank you Facebook guys
