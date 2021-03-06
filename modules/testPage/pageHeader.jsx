var React = require('react');

var PageHeader = React.createClass({
    propTypes: {
        prodName: React.PropTypes.string.isRequired,
        pageName: React.PropTypes.string.isRequired,
        testName: React.PropTypes.string
    },
    getInitialState: function () {
        return {};
    },
    render: function () {

        // 添加按钮可视状态
        var addBtnStatus = this.props.showAddBtn ? '' : ' hidden';
        
        var testName;
        if (this.props.testName) {
            testName = (<span> &gt; {this.props.testName}</span>);
        }

        return (
            <div className="test-page-header">
                <h2 className="page-header">
                    <section className="hierarchy">
                        <span>{this.props.prodName}</span>
                        <span> &gt; {this.props.pageName}</span>
                        {testName}
                    </section>
                </h2>
            </div>
        );
    },
    componentDidMount: function () {}
});

module.exports = PageHeader;