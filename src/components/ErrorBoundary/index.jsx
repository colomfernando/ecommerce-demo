import React from 'react';
import { arrayOf, node, oneOfType } from 'prop-types';

class ErrorBoundary extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    if (hasError) return null;
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default ErrorBoundary;
