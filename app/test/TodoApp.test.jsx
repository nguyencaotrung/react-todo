var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery')

var TodoApp = require('TodoApp');

describe('TodoApp',() => {
	it('should exists',() => {
		expect(TodoApp).toExist();
	});

	it('should add todo to the to do state on handleTodo()',()=>{
		var todoText = 'test text';
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

		todoApp.setState({todos: []});
		todoApp.handleAddTodo(todoText);

		expect(todoApp.state.todos[0].text).toBe(todoText);
	});

	it('should toggle completed value when handleToggle called',()=>{
		var todoData = {
			id: 11,
			text: "text features",
			completed: false
		};

		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({todos: [todoData]});
		
		expect(todoApp.state.todos[0].completed).toBe(false);
		//call handleToggle with 11
		todoApp.handleToggle(11);
		//Verify that value changed
		expect(todoApp.state.todos[0].completed).toBe(true);
	});
});