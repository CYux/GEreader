import React from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import IconClose from '@theme/Icon/Close';
import styles from './styles.module.css';
export default function CollapseButton({onClick}) {
  return (
    <div style={{marginTop: 20 + 'px', marginRight: 20 + 'px', marginBottom: -30 + 'px'}}>
    <button
      type="button"
      title={translate({
        id: 'theme.docs.sidebar.collapseButtonTitle',
        message: 'Collapse sidebar',
        description: 'The title attribute for collapse button of doc sidebar',
      })}
      aria-label={translate({
        id: 'theme.docs.sidebar.collapseButtonAriaLabel',
        message: 'Collapse sidebar',
        description: 'The title attribute for collapse button of doc sidebar',
      })}
      className={clsx(
        // 'button' button--secondary button--outline',
        // 'button',
        styles.collapseSidebarButton,
      )}
      onClick={onClick}>
      <IconClose className={styles.collapseSidebarButtonIcon} color='var(--ifm-color-emphasis-600)' />
    </button>
    </div>
  );
}
