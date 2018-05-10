import React from 'react'
import { Transition } from 'react-transition-group'

export default function withTransition(WrappedComponent) {
  return class extends React.Component {
    handleAnimateIn(done) {
      if (
        typeof this.wrappedComponent.animateIn ===
        'function'
      ) {
        const promise = this.wrappedComponent.animateIn()
        if (promise && typeof promise.then === 'function') {
          promise.then(done)
        } else {
          done()
        }
      }
    }

    handleAnimateOut(done) {
      const next = () => {
        if (done) done()
      }
      if (
        typeof this.wrappedComponent.animateOut ===
        'function'
      ) {
        const promise = this.wrappedComponent.animateOut()
        if (promise && typeof promise.then === 'function') {
          promise.then(next)
        } else {
          next()
        }
      } else {
        next()
      }
    }

    render() {
      return (
        <Transition
          {...this.props}
          addEndListener={(node, done) => {
            if (this.props.in) {
              this.handleAnimateIn(done)
            } else {
              this.handleAnimateOut(done)
            }
          }}
        >
          {status => (
            <WrappedComponent
              ref={e => (this.wrappedComponent = e)}
              {...this.props}
              transitionStatus={status}
            />
          )}
        </Transition>
      )
    }
  }
}
