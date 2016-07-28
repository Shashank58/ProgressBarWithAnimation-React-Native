var React = require('react')
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StyleSheet,
  LayoutAnimation,
} =  require('react-native')

export default class ProgressBarClassic extends React.Component {
  constructor() {
    super()
    this.state = {
      progress: 0,
      init_animation: false,
    }
  }

  componentDidMount() {
    LayoutAnimation.spring()
    let progress = 0
    setTimeout(()=>{
        setInterval(() => {
            progress = progress + 5
            if (progress <= this.props.progress) {
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
    var value = (
      <View style={Style.progressBar_mes}>
        <Text style={Style.progressBar__val}>{this.state.progress}%</Text>
      </View>
    )

    var chart = (
      <View>
        <View style={[Style.flexBox, Style.progressBar]}>
          <View style={[Style.progressBar_left, {flex:this.state.progress}]}>
            {value}
          </View>
          <View style={[Style.progressBar_right, {flex:100 - this.state.progress}]}></View>
        </View>

      </View>
    )
    return chart
  }
}

var Style = StyleSheet.create({
  flexBox: {
    flex: 1,
    flexDirection: 'row',
  },
  progressBar: {
    overflow: 'hidden',
    height: 20,
    borderWidth: 2,
    borderColor: '#D50000',
    borderRadius: 10,
    margin: 16,
  },
  progressBar_left: {
    backgroundColor: '#D50000',
  },
  progressBar_right: {
    backgroundColor: '#fff',
  },
  progressBar_mes: {
    position: 'absolute',
    right: 0,
    paddingRight: 5,
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'row',
  },
  progressBar__val: {
    color: '#fff',
  }
})
