/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createUserFlowApiConnectorConfigurationFromDiscriminatorValue, type UserFlowApiConnectorConfiguration } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { PostAttributeCollectionRequestBuilderNavigationMetadata, PostAttributeCollectionRequestBuilderRequestsMetadata, PostAttributeCollectionRequestBuilderUriTemplate, type PostAttributeCollectionRequestBuilder } from './postAttributeCollection/';
import { PostFederationSignupRequestBuilderNavigationMetadata, PostFederationSignupRequestBuilderRequestsMetadata, PostFederationSignupRequestBuilderUriTemplate, type PostFederationSignupRequestBuilder } from './postFederationSignup/';
import { PreTokenIssuanceRequestBuilderNavigationMetadata, PreTokenIssuanceRequestBuilderRequestsMetadata, PreTokenIssuanceRequestBuilderUriTemplate, type PreTokenIssuanceRequestBuilder } from './preTokenIssuance/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration
 */
export interface ApiConnectorConfigurationRequestBuilder extends BaseRequestBuilder<ApiConnectorConfigurationRequestBuilder> {
    /**
     * Provides operations to manage the postAttributeCollection property of the microsoft.graph.userFlowApiConnectorConfiguration entity.
     */
    get postAttributeCollection(): PostAttributeCollectionRequestBuilder;
    /**
     * Provides operations to manage the postFederationSignup property of the microsoft.graph.userFlowApiConnectorConfiguration entity.
     */
    get postFederationSignup(): PostFederationSignupRequestBuilder;
    /**
     * Provides operations to manage the preTokenIssuance property of the microsoft.graph.userFlowApiConnectorConfiguration entity.
     */
    get preTokenIssuance(): PreTokenIssuanceRequestBuilder;
    /**
     * Configuration for enabling an API connector for use as part of the self-service sign-up user flow. You can only obtain the value of this object using Get userFlowApiConnectorConfiguration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserFlowApiConnectorConfiguration
     */
     get(requestConfiguration?: RequestConfiguration<ApiConnectorConfigurationRequestBuilderGetQueryParameters> | undefined) : Promise<UserFlowApiConnectorConfiguration | undefined>;
    /**
     * Configuration for enabling an API connector for use as part of the self-service sign-up user flow. You can only obtain the value of this object using Get userFlowApiConnectorConfiguration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ApiConnectorConfigurationRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Configuration for enabling an API connector for use as part of the self-service sign-up user flow. You can only obtain the value of this object using Get userFlowApiConnectorConfiguration.
 */
export interface ApiConnectorConfigurationRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ApiConnectorConfigurationRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ApiConnectorConfigurationRequestBuilderNavigationMetadata: Record<Exclude<keyof ApiConnectorConfigurationRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    postAttributeCollection: {
        uriTemplate: PostAttributeCollectionRequestBuilderUriTemplate,
        requestsMetadata: PostAttributeCollectionRequestBuilderRequestsMetadata,
        navigationMetadata: PostAttributeCollectionRequestBuilderNavigationMetadata,
    },
    postFederationSignup: {
        uriTemplate: PostFederationSignupRequestBuilderUriTemplate,
        requestsMetadata: PostFederationSignupRequestBuilderRequestsMetadata,
        navigationMetadata: PostFederationSignupRequestBuilderNavigationMetadata,
    },
    preTokenIssuance: {
        uriTemplate: PreTokenIssuanceRequestBuilderUriTemplate,
        requestsMetadata: PreTokenIssuanceRequestBuilderRequestsMetadata,
        navigationMetadata: PreTokenIssuanceRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ApiConnectorConfigurationRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createUserFlowApiConnectorConfigurationFromDiscriminatorValue,
        queryParametersMapper: ApiConnectorConfigurationRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const ApiConnectorConfigurationRequestBuilderUriTemplate = "{+baseurl}/identity/b2xUserFlows/{b2xIdentityUserFlow%2Did}/apiConnectorConfiguration{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */