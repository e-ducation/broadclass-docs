const React = require('react');

class Contact3 extends React.Component {
  render() {
    const { config: siteConfig } = this.props;
    const { baseUrl } = siteConfig;

    return (
      <div className="mainContainer">
        <img src={`${baseUrl}img/huiqing/1.png`} />
        <img src={`${baseUrl}img/huiqing/2.png`} />
        <img src={`${baseUrl}img/huiqing/3.png`} />
        <img src={`${baseUrl}img/huiqing/4.png`} />
      </div>
    );
  }
}

module.exports = Contact3;
