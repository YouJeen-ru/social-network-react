import React from 'react';

class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false,
        title: 'Hi'
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })

    }

    deActivateEditMode() {
        this.setState({
            editMode: false
        })

    }

    render() {
        return (
            <>
                <div>
                    {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                    }

                    {this.state.editMode &&
                    <div>
                        <input value={this.props.status} autoFocus onBlur={this.deActivateEditMode.bind(this)}/>
                    </div>
                    }
                </div>
            </>
        );
    }


};

export default ProfileStatus;