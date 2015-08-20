var React = require('react');
var ajax = require('../../lib/ajax');
var copy = require('../../lib/copy');

require('./testSteps.less');

var StepList = require('./stepList');

var TestSteps = React.createClass({
    propTypes: {
        testId: React.PropTypes.number,
        onReturn: React.PropTypes.func,
        steps: React.PropTypes.array,
        onAdd: React.PropTypes.func
    },
    getInitialState: function () {
        return {
            saveUrl: '/save_steps'
        };
    },
    render: function () {
        if (!this.props.testId) {
            return false;
        }

        return (
            <div className="test-steps">
                <section className="operation-area">
                    <button className="btn btn-default" onClick={this.return}>返回</button>
                    <button className="btn btn-info" onClick={this.runTest}>运行测试</button>
                    <button className="btn btn-primary" onClick={this.openAddDialog}>增加操作</button>
                </section>
                <div className="test-steps-container">
                    <StepList list={this.props.steps} />
                </div>
            </div>
        );
    },
    componentDidMount: function () {},
    runTest: function (e) {
        e.preventDefault();
    },
    return: function (e) {
        e && e.preventDefault();

        this.props.onReturn && this.props.onReturn();
    },
    openAddDialog: function (e) {
        var StepForm = require('../stepForm/stepForm');

        e.preventDefault();
        
        React.render(
            <span></span>,
            document.getElementById('extraContainer')
        );
        React.render(
            <StepForm
                onSave={this.addStep}
                featureId={this.props.testId} />,
            document.getElementById('extraContainer')
        );
    },

    // 增加测试步骤
    addStep: function (newStep) {
        var featureId = this.props.testId;
        console.log('add new step');
        this.props.onAdd && this.props.onAdd(featureId, newStep);
    }
});

module.exports = TestSteps;