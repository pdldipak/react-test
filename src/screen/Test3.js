/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react'
import {
  Button,
  PlusIcon,
  MinusIcon,
} from '../components/Button/Button.styles.js'
import useCounter from '../components/customHooks/useCounter.js'
import * as S from './Test1.styles.js'
import * as S3 from './Test3.styles.js'
import axios from 'axios'

const repositoryNames = [
  'eslint/eslint',
  'oakwood/front-end-questions',
  'babel/babel',
  'webpack/webpack',
  'storybooks/storybook',
  'facebook/react',
  'reactjs/redux',
  'expressjs/express',
]

const Test3 = () => {
  const [count, increment, decrement] = useCounter(0, 1)
  const [gitRipos, setGitRipos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const URL = `https://api.github.com/repos/${repositoryNames[count]}`

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchGitRepo = async () => {
    try {
      await axios.get(URL).then((res) => {
        setGitRipos(res.data)
        setLoading(false)
        setError(null)
      })
    } catch (error) {
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : `Unable to display at the movement, ${error}`,
      )

      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGitRepo()
  }, [increment, decrement, fetchGitRepo])

  return (
    <S3.MainWrapper>
      <S.Wrapper>
        <Button type="button" black shouldHoverBlack onClick={decrement}>
          <span>
            <MinusIcon />
          </span>
          <span>Decrement</span>
        </Button>

        <h1>
          Count:
          <span>{count}</span>
        </h1>

        <Button
          type="button"
          backgroundColor="#FF69B4"
          shouldHoverPink
          color="#ffffff"
          onClick={increment}
        >
          <span>
            <PlusIcon />
          </span>
          <span>Increment</span>
        </Button>
      </S.Wrapper>

      <S3.APIDisplay>
        <S3.HeadingInfo>
          Favourite GitHub repositories Informations
        </S3.HeadingInfo>
        {loading && <S3.LoadingSpinner />}
        {error && <S3.Error>{error}</S3.Error>}
        {!loading && !error && (
          <>
            {' '}
            <S3.APIInfo>
              <strong>Full-Name:</strong>
              {gitRipos?.full_name}
            </S3.APIInfo>
            <S3.APIInfo>
              <strong>Description:</strong>
              {gitRipos?.description}
            </S3.APIInfo>
            <S3.APIInfo>
              <strong>Amount of stars:</strong>
              {gitRipos?.stargazers_count}
            </S3.APIInfo>
          </>
        )}
      </S3.APIDisplay>
    </S3.MainWrapper>
  )
}

export default Test3
