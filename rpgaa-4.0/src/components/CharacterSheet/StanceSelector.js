import React from 'react'
import Stance from './Stances/Stance'
// CSS imported from it's own componential css.  Stance has it's own.
import './css/charactersheet-style.css'


export class CharacterSheet extends React.Component {
    constructor() {
        super()

        // The method I'm envisioning to achieve dynamic character information generation and ease of flow is through 
        // these "stances."  Each stance will have an object which we can change through database manipulation.  Whatever 
        // goes into the database, say we generate a 'playerKey' based on what the player's character ends up becoming. 
        
        // For example, a player who chooses 'Male,  Lawful Good, Human, Paladin' might recieve a key value that is 'M-LG-H-P' or something of the sort.
        // That value is then used to dynamically populate elements in their respective character sheets. 

        // Regardless of "how" we pull the information from the database, I think this is a decent start at cycling through the different Stances. 

        // I also envision a toggle button that reads "Start Turn" and later "End Turn" on Start Turn, "Offensive" is automatically pulled up
        // End Turn pulls "Defensive Up"
        // We may even take it a step further and have there be a "Start Combat" button, which enables Offensive, and Defensive stances. 
        // When Start Combat being enabled, the default Stance is Role Play, with Utility as a secondary stance. It could help streamline things even more.

        this.state= {
            stances: [
                {
                    stance: 'Atk',
                    tag: 'offense',
                    display: 'Atk',
                    playerKey: ''
                },
                {
                    stance: 'Def',
                    tag: 'defense',
                    display: 'Def',
                    playerKey: ''
                },
                {
                    stance: 'Util',
                    tag: 'utility',
                    display: 'Util',
                    playerKey: ''
                },
                {
                    stance: 'RP',
                    tag: 'roleplay',
                    display: 'RP',
                    playerKey: ''
                }
            ]            
        }

  
    }

    // This sets the stance by mapping the array of objects above and returning a new object with the updated "selected_stance" in 's'.


    selected_stance = (stance) => {     
        let currentStance = this.state.stances.map((s) => {
            if(s.stance === stance) {
                s.selected = true;
            }                      
            
            return s;          
              
        });
        
       this.setState({stances: currentStance})        
    }
    
   

    render() {
        return (
            <div className='charactersheet-btn-group'>
                {this.state.stances.map((selection) => (
                // Make sure to pass through any data pulled from new Stance key/value pairs down here.    
                <Stance 
                    stance={selection.stance}
                    tag={selection.tag}
                    display={selection.display}
                    selected_stance={this.selected_stance}
                    />
                ))
            }
            </div>
                
        )
    }
}

export default CharacterSheet