import { useState } from 'react';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
      <div>
        <Steps />
        <Steps />
      </div>
  )
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ name: 'Doug' });

  const handlePrevious = function () {
    if (step > 1) {
      // Update State based on current value of the State by passing in callback function
      setStep(s => s - 1);
    }
  }

  const handleNext = function () {
    if (step < 3) {
      setStep(s => s + 1);
      // setStep(s => s + 1);

      // BAD PRACTICE
      // test.name = 'James';

      // setTest({ name: 'James' });
    }
  }

  return (
      <div>
        <button className="close" onClick={() => setIsOpen(is => !is)}>&#10007;</button>

        {isOpen &&
            <div className='steps'>
              <div className="numbers">
                <div className={step >= 1 ? 'active' : ''}>1</div>
                <div className={step >= 2 ? 'active' : ''}>2</div>
                <div className={step >= 3 ? 'active' : ''}>3</div>
              </div>

              <p className="message">Step {step}: {messages[step - 1]}</p>

              <div className="buttons">
                <button style={{ backgroundColor: '#7950f2', color: '#ffffff' }} onClick={handlePrevious}>Previous
                </button>
                <button style={{ backgroundColor: '#7950f2', color: '#ffffff' }} onClick={handleNext}>Next</button>
              </div>
            </div>
        }
      </div>
  )
}
