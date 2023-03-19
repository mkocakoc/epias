import React from 'react';
import styles from './OptionsComponent.module.css';


class OptionsComponent extends React.Component {
  triggerComponentDidUpdate = true

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.triggerComponentDidUpdate) {
      this.triggerComponentDidUpdate = false;

      this.setState({ panelSizes: this.props.data }, () => {
        this.triggerComponentDidUpdate = true;
      });
    }
  }

  render() {
    return (
        <div className={styles.optionsComponent}>
          <div className={styles.optionsArea}>
            <div className={styles.optionsMain}>
              <div className={styles.optionsRow}>
                <h5>Ayarlar</h5>
              </div>
              <div className={styles.optionsRow}>
                <div className={styles.optionsRowTitle}>
                  Yatay Pencere Değeri :
                </div>
                <div className={styles.optionsRowValue}>
                  %{this.state != null && this.state.hasOwnProperty('panelSizes') ? this.state.panelSizes[0] : ''},
                  %{this.state != null && this.state.hasOwnProperty('panelSizes') ? this.state.panelSizes[1] : ''}
                </div>
              </div>
              <div className={styles.optionsRow}>
                <div className={styles.optionsRowTitle}>
                  Üst Dikey Pencere Değeri :
                </div>
                <div className={styles.optionsRowValue}>
                  %{this.state != null && this.state.hasOwnProperty('panelSizes') ? this.state.panelSizes[2] : ''},
                  %{this.state != null && this.state.hasOwnProperty('panelSizes') ? this.state.panelSizes[3] : ''}
                </div>
              </div>
              <div className={styles.optionsRow}>
                <div className={styles.optionsRowTitle}>
                  Alt Dikey Pencere Değeri :
                </div>
                <div className={styles.optionsRowValue}>
                  %{this.state != null && this.state.hasOwnProperty('panelSizes') ? this.state.panelSizes[4] : ''},
                  %{this.state != null && this.state.hasOwnProperty('panelSizes') ? this.state.panelSizes[5] : ''}
                </div>
              </div>

            </div>
          </div>
        </div>
    );
  }
}

OptionsComponent.propTypes = {};

OptionsComponent.defaultOptions = {};

export default OptionsComponent;
