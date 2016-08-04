#progress-bar-animated

A cross platform progressbar library using react native which is completely customizable

#Installation

	npm install progress-bar-animated --save

![progressios](https://cloud.githubusercontent.com/assets/13211441/17270661/d8986d8a-5685-11e6-8972-9eb475af5689.gif)

#Example usage

	import ProgressBarAnimated from 'progress-bar-animated';

	<ProgressBarAnimated 
		progress={50} 
		style={{marginLeft: 16, marginRight: 16}}
		filledColor='red'
		unfilledColor='white'
		/>

#Available props

	progress: Filled level of progress bar(required)
	style: Styling for the progress bar(including borderWidth, borderColor, borderRadius....)
	fillColor: Color of filled portion in progress bar
	unfilledColor: Color of unfilled portion in progress bar 	
	startDelay: Specify the time after which the fill animation should start in ms(default is 300)