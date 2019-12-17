const React = require('react');

class Contact2 extends React.Component {
  render() {
    const { config: siteConfig } = this.props;
    const { baseUrl } = siteConfig;

    return (
      <div className="mainContainer">
        <img src={`${baseUrl}img/tiantian/1.png`} />
        <img src={`${baseUrl}img/tiantian/2.png`} />
        <img src={`${baseUrl}img/tiantian/3.png`} />
        <img src={`${baseUrl}img/tiantian/4.png`} />
      </div>
    );
  }
}

module.exports = Contact2;
