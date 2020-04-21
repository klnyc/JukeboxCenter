import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Profile extends React.Component {
    constructor() {
        super()
        this.state = {
            edit: false,
            fields: []
        }
        this.renderProfile = this.renderProfile.bind(this)
        this.renderProfileEdit = this.renderProfileEdit.bind(this)
    }

    componentDidMount() {
        const { user } = this.props
        const fields = [
            { category: "Email", data: user.email },
            { category: "Name", data: user.name },
            { category: "Address", data: user.address }
        ]
        this.props.match.path === '/profile/edit'
        ? this.setState({ edit: true, fields}) 
        : this.setState({ edit:false, fields })
    }

    renderProfile(fields) {
        return (
            <Fragment>
                {fields.map((field, index) => 
                    <div className="profile-fields" key={index}>
                        <div className="profile-column left">{field.category}</div>
                        <div className="profile-column right">{field.data || '-'}</div>
                    </div> 
                )}
                <div className="profile-submit-button"><Link to="/profile/edit">Edit Account Information</Link></div>
            </Fragment>
        )
    }

    renderProfileEdit(fields) {
        return (
            <Fragment>
                <div className="profile-fields">
                    <div className="profile-column type"></div>
                    <div className="profile-column current">Current</div>
                    <div className="profile-column new">New</div>
                </div>
                {fields.slice(1).map((field, index) => 
                    <div className="profile-fields" key={index}>
                        <div className="profile-column type">{field.category}</div>
                        <div className="profile-column current">{field.data || '-'}</div>
                        <div className="profile-column new"><input /></div>
                    </div> 
                )}
                <div className="profile-submit-button">Submit Changes</div>
            </Fragment>
        )
    }

    render() {
        const { edit, fields } = this.state
        return (
            <div className="profile">
                <div className="profile-fields-container">
                {edit ? this.renderProfileEdit(fields) : this.renderProfile(fields)}
                </div>
            </div>
        )
    }
}

const mapState = (state) => ({
    user: state.user
})

export default connect(mapState, null)(Profile)