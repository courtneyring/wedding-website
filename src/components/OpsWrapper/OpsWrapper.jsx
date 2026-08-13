import { Container, Button } from '@courtneyring/components-library';
import styles from './OpsWrapper.module.scss';
import classNames from 'classnames';

const OpsWrapper = ({children, backButton, header, subheader}) => {
    return (
      <Container className={styles.root} maxWidth='sm'>
        <Button
            variation='link'
          {...backButton}
          label={
            <>
              <span className="material-symbols-outlined">arrow_back_ios</span>
              {backButton.label}
            </>
          }
          className={styles.button}
        />
       {header && <h1 className={classNames(styles.header, "typography--h1 text-center")}>
          {header}
        </h1>}
        {subheader && <p
          className={classNames(styles.subheader, "typography--h3 text-center")}
        >
          {subheader}
        </p>}
        {children}
      </Container>
    );
}

export default OpsWrapper;