import React from 'react';

class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })

    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)

    }
    onStatusChange = (e: any) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        this.setState({
            status: e.currentTarget.value
        })

    }

    render() {
        return (
            <>
                <div>
                    {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'No status'}</span>
                    </div>
                    }

                    {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} value={this.state.status} autoFocus onBlur={this.deActivateEditMode}/>
                    </div>
                    }
                </div>
            </>
        );
    }


};

export default ProfileStatus;