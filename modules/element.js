const buttons = [
    {className: 'allClear', text: 'AC'   },
    {className: 'symbol'  , text: '+/-'  },
    {className: 'mod'     , text: '%'    },
    {className: 'divide'  , text: '÷'    },
    {className: 'seven'   , text: '7'    },
    {className: 'eigth'   , text: '8'    },
    {className: 'nine'    , text: '9'    },
    {className: 'multiply', text: 'x'    },
    {className: 'four'    , text: '4'    },
    {className: 'five'    , text: '5'    },
    {className: 'six'     , text: '6'    },
    {className: 'subtract', text: '-'    },
    {className: 'one'     , text: '1'    },
    {className: 'two'     , text: '2'    },
    {className: 'three'   , text: '3'    },
    {className: 'add'     , text: '+'    },
    {className: 'zero'    , text: '0'    },
    {className: 'decimal' , text: '.'    },
    {className: 'equal'   , text: '='    }
];

const validOperator = [
    {name: 'add'     , symbol: '+'},
    {name: 'subtract', symbol: '-'},
    {name: 'multiply', symbol: '*'},
    {name: 'divide'  , symbol: '÷'},
    {name: 'mod'     , symbol: '%'}
];

const addButton = (text, className, listenEvent) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add('button', className);

    if(listenEvent) {
        button.addEventListener("click",
                                () => handleInput(button.className),
                                false);
    }

    return button;
}

const handleInput = (className) => {
    console.log(className);
}

export const addCalculator = () => {
    buttons.map(button => {
        document.querySelector('.container.console')
                .appendChild(addButton(button.text, 
                                       button.className,
                                       true));
    })
}

export const addOperator = (operatorName) => {
    const operator = validOperator
                        .filter(self => self.name === operatorName)[0]
                        .symbol
    document.querySelector('.section.operator')
            .appendChild(addButton(operator, 'operator'));
}

export const updateDisplay = (number) => {
    document.querySelector('.text.number')
            .textContent = number;
}