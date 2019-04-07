import React from "react";
import PropTypes from "prop-types";

export const WithAPI = (
        api,
        auth = true,
        mapResponseToProps = (response) => response.data
    ) =>
    (
        Component,
        callOnMount = true,
        mapDataToApi = (data = {}, props = {}) => ({...data, ...props})
    ) => {


    class APIWrapper extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
                loading: false,
                response: null,
                success: false,
                error: null,
            };
        }

        componentDidMount() {
            if (callOnMount) {
                this.handleFetchData();
            }
        }

        handleFetchData() {
            // @todo check if user is logged in

            this.setState({
                loading: true,
                error: null
            });

            const mappedData = mapDataToApi(this.props);

            this.props.onFetchStart(mappedData);

            api(mappedData)
                .then(response => {
                    this.setState({
                        loading: false,
                        response: response,
                        success: true,
                    });

                    this.props.onFetchSuccess(response);
                })
                .catch(error => {
                    this.setState({
                        loading: false,
                        error: error
                    });

                    this.props.onFetchFail(error);
                })
        }

        handleSubmit(data) {
            // @todo check if user is logged in

            this.setState({
                loading: true,
                error: null,
            });

            const mappedData = mapDataToApi(data, this.props);

            this.props.onSubmitStart(mappedData);

            api(mappedData)
                .then(response => {
                    this.setState({
                        loading: false,
                        response: response,
                        success: true,
                    });

                    this.props.onSubmitSuccess(response);
                })
                .catch(error => {
                    this.setState({
                        loading: false,
                        error: error,
                    });

                    this.props.onSubmitFail(error);
                })
        }

        render () {

            // Filter props that will go into Component
            const {
                onSubmitFail, onSubmitSuccess, onSubmitStart, onFetchFail, onFetchStart, onFetchSuccess,
                ...filtered_props
            } = this.props;
            return (
                <Component
                    {...this.state}
                    {...filtered_props}

                    {...mapResponseToProps(this.state.response)}

                    onSubmit={this.handleSubmit}
                />
            )
        }

    }

    APIWrapper.propTypes = {
        onSubmitStart: PropTypes.func,
        onSubmitSuccess: PropTypes.func,
        onSubmitFail: PropTypes.func,

        onFetchStart: PropTypes.func,
        onFetchSuccess: PropTypes.func,
        onFetchFail: PropTypes.func,
    };

    APIWrapper.defaultProps = {
        onSubmitStart: () => {},
        onSubmitSuccess: () => {},
        onSubmitFail: () => {},

        onFetchStart: () => {},
        onFetchSuccess: () => {},
        onFetchFail: () => {},
    };


    return APIWrapper;
};

export default (WithAPI);