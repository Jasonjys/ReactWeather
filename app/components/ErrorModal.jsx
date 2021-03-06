var React = require('react');

var ErrorModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Error',
    };
  },
  proptypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function () {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {
    const { title, message } = this.props;

    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>Oops Error</h4>
        <p>{ message }</p>
        <p>
          <button className="button hollow" data-close="">
            Okey
          </button>
        </p>
      </div>
    )
  }
});

module.exports = ErrorModal;