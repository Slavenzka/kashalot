import React, { useMemo } from 'react'
import css from './Policy.module.scss'
import Container from 'components/Grid/Container'
import Heading from 'components/Heading/Heading'
import { dataPolicy } from 'Pages/Policy/_assets/dataPolicy'
import ContainerMobile from 'components/Grid/ContainerMobile'

function PolicyMobile () {
  const policyDescription = useMemo(() => {
    const list = dataPolicy.map(({label, list}, index) => (
      <li className={css.item} key={index}>
        <span dangerouslySetInnerHTML={{ __html: label }} />
        {list && (
          <ol className={css.list}>
            {list.map((item, index) => (
              <li
                className={css.item}
                dangerouslySetInnerHTML={{ __html: item }}
                key={index}
              />
            ))}
          </ol>
        )}
      </li>
    ))
    
    return (
      <ol className={css.list}>
        {list}
      </ol>
    )
  }, [])
  
  return (
    <section>
      <ContainerMobile className={css.wrapper}>
        <Heading
          content="Политика конфиденциальности"
          className={css.heading}
        />
        {policyDescription}
      </ContainerMobile>
    </section>
  )
}

export default PolicyMobile