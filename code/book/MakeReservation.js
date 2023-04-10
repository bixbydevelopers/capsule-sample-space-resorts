import ZonedDateTime from "../lib/zoned-date-time-polyfill.js";
import config from 'config';
import console from 'console';
export default function ({order, $vivContext}) {
  var relevantHours = getLocalizedRelevantHours($vivContext);
  console.info($vivContext.locale, 'relevant hours', relevantHours);
  ZonedDateTime.setVivContext($vivContext);
  return {
    $id: '' + Math.floor(Math.random() * 10000000),
    item: order.item,
    buyer: order.buyer,
    relevantDateTime: ZonedDateTime.fromDate(
      order.item.dateInterval.start
    )
      .minusHours(relevantHours)
      .getDateTime(),
  };
};

function getLocalizedRelevantHours($vivContext) {
  switch ($vivContext.locale.split('-')[0]) {
    case 'ko':
      return config.get('ko.relevantHours');
    default:
      return config.get('base.relevantHours');
  }
}
