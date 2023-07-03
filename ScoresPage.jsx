import React ,{ useState } from 'react';
import { Container,Row,Col,Button,Alert } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import './ScoresPage.css';

const ScoresPage = () => {
      
    const [player1Score, setPlayer1Score] = useState (501);
    const [player2Score, setPlayer2Score] = useState (501);
    const [currentPlayer, setCurrentPlayer] = useState('');
    const [scoreSubmitted, setScoreSubmitted] = useState(false);

    const handleScoreSubmit = (e) => { e.preventDefault();

        if (scoreSubmitted) {
            alert ('You have already submitted your score');
        return;
        }
        

    const currentPlayerScore = currentPlayer === '1' ? player1Score : player2Score;
    const updatedScore = currentPlayerScore - parseInt(e.target.elements.score.value); 

       if (currentPlayer === 1) {
        setPlayer1Score(updatedScore)
       }
       else {
        setPlayer2Score(updatedScore)
       }

       if (updatedScore === 0 ) {
        alert (`Player${currentPlayer}wins!`)
       } 
       else {
        setCurrentPlayer (currentPlayer === 1 ? 2 : 1); 
       }
       e.target.reset();

       
    setScoreSubmitted (true);
    setCurrentPlayer (currentPlayer  === 1 ? 2 : 1);
    setScoreSubmitted (false);
    e.target.reset();
    };


  return(
    <Container className="mt-4">
        <Row>
            <Col>
            <h1>Scores Page</h1>
            <hr />
            <div className="text-center">
                <h4>Player 1</h4>
                <h2>{player1Score}</h2>
                <Form onSubmit={handleScoreSubmit}>
                    <Form.Group controId = "score-player1Score">
                        <Form.Label>Enter Score</Form.Label>
                        <Form.Control type="number" name="score" min="1" max={player1Score} required/>
                    </Form.Group>
                    <Button variant='primary' size='lg' type="submit" className='blue-button' >Submit Score</Button>
                </Form>
                { scoreSubmitted && (
                    <div className='mt-3'>
                        <Alert variant='danger'>You have already submitted your score.</Alert>
                    </div>
                )}
            </div>
            </Col>
            <Col>
            <hr/>
            <div className='text-center'>
            <h4>Player 2</h4>
            <h2>{player2Score}</h2>
            <Form onSubmit={handleScoreSubmit}>
                    <Form.Group controId = "score-player2Score">
                        <Form.Label>Enter Score</Form.Label>
                        <Form.Control type="number" name="score" min="1" max={player2Score} required/>
                    </Form.Group>
                    <Button variant='primary'  size='lg' type="submit" className='blue-button' >Submit Score</Button>
                </Form>
                { scoreSubmitted && (
                    <div className='mt-3'>
                        <Alert variant='danger'>You have already submitted your score.</Alert>
                    </div>
                )}
               </div>
                </Col>
            </Row>
    </Container>
  );
};
export default ScoresPage;