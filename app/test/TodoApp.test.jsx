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
});