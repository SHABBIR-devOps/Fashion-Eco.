import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // In production, send this to an error-tracking service.
    console.error("FORME UI crashed:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-6">
          <p className="font-display text-2xl mb-2">Something didn't load right.</p>
          <p className="font-body text-sm text-ink-soft mb-6">Refresh the page — if it keeps happening, let us know.</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-ink text-white text-sm px-5 py-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt"
          >
            Refresh
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
