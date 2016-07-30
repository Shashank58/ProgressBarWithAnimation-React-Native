import React, { Component } from 'react'
import { Text, View, StyleSheet, LayoutAnimation } from 'react-native' 

class ProgressBarAnimated extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      progress: 0,
    }
  }

  componentDidMount() {
    LayoutAnimation.spring()
    let progress = 0
    setTimeout(()=>{
        setInterval(() => {
            progress =+ 5
            if (progress < this.props.progress) {
                progress = this.props.progress
                this.setState({progress})
            }
        }, 30)

    }, 300)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({progress: nextProps.progress})
  }

  componentWillUpdate() {
    LayoutAnimation.spring()
  }

  render() {
    return (
      <View>
        <View style={[styles.flexBox, styles.progressBar, this.props.style]}>
          <View style={[{flex:this.state.progress}, 
              {backgroundColor: this.props.fillColor || '#D50000'}]} />
          <View style={[{flex:100 - this.state.progress}, 
              {backgroundColor: this.props.unfilledColor || '#FFF'}]} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flexBox: {
    flex: 1,
    flexDirection: 'row',
  },
  progressBar: {
    overflow: 'hidden',
    height: 14,
    borderWidth: 1,
    borderColor: '#D50000',
    borderRadius: 10,
  }
})

ProgressBarAnimated.PropTypes = {
  style: React.PropTypes.node,
  progress: React.PropTypes.number,
  fillColor: React.PropTypes.color,
  unfilledColor: React.PropTypes.color
}

module.exports = ProgressBarAnimated