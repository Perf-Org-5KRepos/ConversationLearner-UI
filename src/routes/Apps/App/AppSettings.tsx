import * as React from 'react';
import { returntypeof } from 'react-redux-typescript';
import { editBLISApplicationAsync } from '../../../actions/updateActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { State } from '../../../types';
import { CommandButton, PrimaryButton, TextField, Dropdown, Label, List } from 'office-ui-fabric-react';
import { BlisAppBase, BlisAppMetaData } from 'blis-models'
import './AppSettings.css'

const styles = {
    shown: {
        visibility: "visible"
    },
    hidden: {
        visibility: "hidden"
    }
}

interface ComponentState {
    localeVal: string
    appIdVal: string
    appNameVal: string
    luisKeyVal: string
    edited: boolean
    botFrameworkAppsVal: any[],
    newBotVal: string,
    isPasswordVisible: boolean,
    passwordShowHideText: string
}

class AppSettings extends React.Component<Props, ComponentState> {
    constructor(p: Props) {
        super(p)

        this.state = {
            localeVal: '',
            appIdVal: '',
            appNameVal: '',
            luisKeyVal: '',
            edited: false,
            botFrameworkAppsVal: [],
            newBotVal: "",
            isPasswordVisible: false,
            passwordShowHideText: 'Show'
        }

        this.luisKeyChanged = this.luisKeyChanged.bind(this)
        this.botIdChanged = this.botIdChanged.bind(this)
        this.appNameChanged = this.appNameChanged.bind(this)
        this.onRenderBotListRow = this.onRenderBotListRow.bind(this)
        this.onClickShowPassword = this.onClickShowPassword.bind(this)
        this.botAdded = this.botAdded.bind(this)
        this.editApp = this.editApp.bind(this)
        this.discardChanges = this.discardChanges.bind(this)
    }
    componentWillMount() {
        let current: BlisAppBase = this.props.blisApps.current
        this.setState({
            localeVal: current.locale,
            appIdVal: current.appId,
            appNameVal: current.appName,
            luisKeyVal: current.luisKey,
            botFrameworkAppsVal: current.metadata.botFrameworkApps,
            newBotVal: ""
        })
    }
    componentDidUpdate() {
        let current: BlisAppBase = this.props.blisApps.current
        if (this.state.edited == false && (this.state.localeVal !== current.locale ||
            this.state.appIdVal !== current.appId ||
            this.state.appNameVal !== current.appName ||
            this.state.luisKeyVal !== current.luisKey ||
            this.state.botFrameworkAppsVal !== current.metadata.botFrameworkApps)) {
            this.setState({
                localeVal: current.locale,
                appIdVal: current.appId,
                appNameVal: current.appName,
                luisKeyVal: current.luisKey,
                botFrameworkAppsVal: current.metadata.botFrameworkApps
            })
        }
    }
    appNameChanged(text: string) {
        this.setState({
            appNameVal: text,
            edited: true
        })
    }
    botIdChanged(text: string) {
        this.setState({
            newBotVal: text,
            edited: true
        })
    }
    luisKeyChanged(text: string) {
        this.setState({
            luisKeyVal: text,
            edited: true
        })
    }
    botAdded() {
        let newBotApps = this.state.botFrameworkAppsVal.concat(this.state.newBotVal);
        this.setState({
            botFrameworkAppsVal: newBotApps,
            newBotVal: ""
        })
    }
    onRenderBotListRow(item?: any, index?: number) {
        return (
            <div>
                <TextField className="ms-font-m-plus" disabled={true} value={item} />
            </div>
        )
    }
    discardChanges() {
        let current: BlisAppBase = this.props.blisApps.current
        this.setState({
            localeVal: current.locale,
            appIdVal: current.appId,
            appNameVal: current.appName,
            luisKeyVal: current.luisKey,
            botFrameworkAppsVal: current.metadata.botFrameworkApps,
            edited: false,
            newBotVal: ""
        })
    }
    editApp() {
        let current: BlisAppBase = this.props.blisApps.current;
        let meta: BlisAppMetaData = new BlisAppMetaData({
            botFrameworkApps: this.state.botFrameworkAppsVal
        })
        let appToAdd = new BlisAppBase({
            appName: this.state.appNameVal,
            appId: current.appId,
            luisKey: this.state.luisKeyVal,
            locale: current.locale,
            metadata: meta
        })
        this.props.editBLISApplicationAsync(this.props.userKey, appToAdd);
        this.setState({
            localeVal: current.locale,
            appIdVal: current.appId,
            appNameVal: current.appName,
            luisKeyVal: current.luisKey,
            edited: false,
            newBotVal: ""
        })
    }

    onClickShowPassword() {
        this.setState((prevState: ComponentState) => ({
            isPasswordVisible: !prevState.isPasswordVisible,
            passwordShowHideText: !prevState.isPasswordVisible ? 'Show' : 'Hide'
        }))
    }

    render() {
        let options = [{
            key: this.state.localeVal,
            text: this.state.localeVal,
        }]
        let buttonsDivStyle = this.state.edited == true ? styles.shown : styles.hidden;
        return (
            <div className="blis-page">
                <span className="ms-font-xxl">Settings</span>
                <span className="ms-font-m-plus">Control your application versions, who has access to it and whether it is public or private....</span>
                <div>
                    <TextField
                        className="ms-font-m-plus"
                        onChanged={(text) => this.appNameChanged(text)}
                        label="Name"
                        value={this.state.appNameVal}
                    />
                    <TextField
                        className="ms-font-m-plus"
                        disabled={true}
                        label="App ID"
                        value={this.state.appIdVal}
                    />
                    <Label className="ms-font-m-plus">LUIS Key</Label>
                    <div className="blis-settings-textfieldwithbutton">
                        <TextField
                            id="luis-key"
                            className="ms-font-m-plus"
                            onChanged={(text) => this.luisKeyChanged(text)}
                            type={this.state.isPasswordVisible ? "text" : "password"}
                            value={this.state.luisKeyVal}
                        />
                        <PrimaryButton
                            onClick={this.onClickShowPassword}
                            className='blis-button--gold'
                            ariaDescription={this.state.passwordShowHideText}
                            text={this.state.passwordShowHideText}
                        />
                    </div>
                    <Label className="ms-font-m-plus">Locale</Label>
                    <Dropdown
                        className="ms-font-m-plus"
                        options={options}
                        selectedKey={this.state.localeVal}
                        disabled={true}
                    />
                    <div>
                        <Label className="ms-font-m-plus">Bot Framework Apps</Label>
                        <List
                            items={this.state.botFrameworkAppsVal}
                            onRenderCell={this.onRenderBotListRow}
                        />
                        <div className="blis-settings-textfieldwithbutton">
                            <TextField
                                className="ms-font-m-plus"
                                onChanged={(text) => this.botIdChanged(text)}
                                placeholder="Application ID"
                                value={this.state.newBotVal}
                            />
                            <PrimaryButton
                                onClick={this.botAdded}
                                className='blis-button--gold'
                                ariaDescription='Add'
                                text='Add'
                            />
                        </div>
                    </div>
                    <div style={buttonsDivStyle}>
                        <CommandButton
                            onClick={this.editApp}
                            className='blis-button--gold'
                            ariaDescription='Save Changes'
                            text='Save Changes'
                        />
                        <CommandButton
                            className="blis-button--gray"
                            onClick={this.discardChanges}
                            ariaDescription='Discard'
                            text='Discard'
                        />
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({
        editBLISApplicationAsync
    }, dispatch);
}
const mapStateToProps = (state: State) => {
    return {
        userKey: state.user.key,
        blisApps: state.apps
    }
}

export interface ReceivedProps {
    app: BlisAppBase
}

// Props types inferred from mapStateToProps & dispatchToProps
const stateProps = returntypeof(mapStateToProps);
const dispatchProps = returntypeof(mapDispatchToProps);
type Props = typeof stateProps & typeof dispatchProps & ReceivedProps;

export default connect<typeof stateProps, typeof dispatchProps, ReceivedProps>(mapStateToProps, mapDispatchToProps)(AppSettings);