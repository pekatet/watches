import PropTypes from 'prop-types'
class WatchModel {
  constructor (name, offset) {
    this.name = name;
    this.offset = offset;
  }
}

WatchModel.proptypes = {
  name: PropTypes.string,
  offset: PropTypes.number
}

export default WatchModel;