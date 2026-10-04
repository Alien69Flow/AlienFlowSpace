import React from 'react';

interface Props {
  children: React.ReactNode;
}
interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Page render error:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
          <div className="w-16 h-16 border border-alien-gold/40 flex items-center justify-center mb-6">
            <span className="text-alien-gold text-2xl font-nasalization">!</span>
          </div>
          <h2 className="text-alien-gold font-nasalization text-xl mb-3">
            Something went wrong
          </h2>
          <p className="text-af-text-muted text-sm max-w-md mb-6">
            The page failed to load. Try refreshing, or navigate to another section.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="af-pill af-pill-primary"
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
