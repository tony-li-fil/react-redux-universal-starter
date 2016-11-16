import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { Container } from 'reactstrap';
import * as i18n from './i18n';

class About extends Component {
  static propTypes = {
    locale: PropTypes.string.isRequired
  };

  render() {
    const styles = require('./About.scss');
    const { locale } = this.props;

    return (
      <IntlProvider locale={locale} messages={i18n[locale]}>
        <div className={styles.about}>
          <Helmet title="About"/>

          <Container>
            <h1>This is the about page!</h1>
          </Container>
        </div>
      </IntlProvider>
    );
  }
}


function mapStateToProps(state) {
  return {
    locale: state.i18n.locale
  };
}

export default connect(mapStateToProps)(About);
