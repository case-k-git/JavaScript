import React, {Component} from 'react';
import { connect } from 'react-redux';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import _ from 'lodash'

const LineSeriesGraph = (props) => {
  // To Do：API完成後に対応
  // const eventLit =  _.map(props.events, event => (
  //  event.body
  // ));
  const　eventList = [
    [parseInt(String(1581130800)+"000")　,23815],
    [parseInt(String(1581134400)+"000"),23825],
    [parseInt(String(1581138000)+"000"),23820],
    [parseInt(String(1581141600)+"000"),23827]];
  const data = [];
  //日時オブジェクト：https://www.w3schools.com/jsref/jsref_gethours.asp
  const date = new Date()
  console.log(date);
  const h = date.getHours();
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const w = [ "日", "月", "火", "水", "木", "金", "土" ][date.getDay()];   
  Highcharts.setOptions({
    global: {  // グローバルオプション
    useUTC: false   // GMTではなくJSTを使う
    },
    lang: {  
      rangeSelectorZoom: '拡大・縮小',
      resetZoom: '表示期間をリセット',
      resetZoomTitle: '表示期間をリセット',
      rangeSelectorFrom: '表示期間',
      rangeSelectorTo: 'から',
      months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      shortMonths: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      weekdays: ['日', '月', '火', '水', '木', '金', '土'],
    }
  });
  const options = {
    title: {
      text: '日経平均株価'
    },
    rangeSelector: {
      inputDateFormat: '%Y年%m月%d日',
      inputEditDateFormat: '%Y年%m%月d日',
      enabled: true,
      buttons: [{
        type: 'minute',
        count: 60*3,
        text: '3時間',
        offsetMin: 0
      },{
      type: 'minute',
      count: 60*24*3,
      text: '3日',
      offsetMin: 0
      },{
      type: 'week',
      count: 1,
      text: '1週間',
      offsetMax: 0
    }]
    },
    xAxis:{
    /**
     * 　xAxis：
     *  1時間単位で描画
     *  https://stackoverflow.com/questions/22141523/highstock-chart-rangeselector-minute-and-day-doesnt-work
     */
      minRange: 3600 * 1000,
      type: 'datetime',
      labels: {
        /** 
         * labels：
         * https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting
         * http://jsfiddle.net/highcharts/PwEnd/
        */
        format: '{value:%m月%d日}',
      }
    },
    tooltip: {
      /**
       * 時間標記:https://api.highcharts.com/highstock/xAxis.dateTimeLabelFormats
       * 曜日標記：https://api.highcharts.com/highcharts/tooltip.dateTimeLabelFormats
       */
      xDateFormat: '%m月%d日('+ w +') %H時 (現在時刻：'+m+'月'+ d　+ '日 ('+ w +') ' + h +'時)'
    },
    navigator: {
    //navigator:https://stackoverflow.com/questions/15717835/change-navigator-date-format-in-highstock
      xAxis: {
        dateTimeLabelFormats: {
          day:  '%b%d日',
          week: '%b%d日',
          month:'%b%d日',
          year: '%b%d日'
        }
      }       
    },
    series: [{
      name: '日経平均株価',
      data: eventList,
      tooltip: {
        valueSuffix: '円'
      }
    },]
  };
  return (
    <div>
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={'stockChart'}
      options={options}
    />
    </div>
  )
}
export default LineSeriesGraph;