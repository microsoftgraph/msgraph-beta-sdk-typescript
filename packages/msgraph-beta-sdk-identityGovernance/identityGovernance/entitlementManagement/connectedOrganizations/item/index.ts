/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createConnectedOrganizationFromDiscriminatorValue, serializeConnectedOrganization, type ConnectedOrganization } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { ExternalSponsorsRequestBuilderNavigationMetadata, ExternalSponsorsRequestBuilderRequestsMetadata, ExternalSponsorsRequestBuilderUriTemplate, type ExternalSponsorsRequestBuilder } from './externalSponsors/';
import { InternalSponsorsRequestBuilderNavigationMetadata, InternalSponsorsRequestBuilderRequestsMetadata, InternalSponsorsRequestBuilderUriTemplate, type InternalSponsorsRequestBuilder } from './internalSponsors/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the connectedOrganizations property of the microsoft.graph.entitlementManagement entity.
 */
export interface ConnectedOrganizationItemRequestBuilder extends BaseRequestBuilder<ConnectedOrganizationItemRequestBuilder> {
    /**
     * Provides operations to manage the externalSponsors property of the microsoft.graph.connectedOrganization entity.
     */
    get externalSponsors(): ExternalSponsorsRequestBuilder;
    /**
     * Provides operations to manage the internalSponsors property of the microsoft.graph.connectedOrganization entity.
     */
    get internalSponsors(): InternalSponsorsRequestBuilder;
    /**
     * Delete a connectedOrganization object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/connectedorganization-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Retrieve the properties and relationships of a connectedOrganization object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ConnectedOrganization
     * @see {@link https://learn.microsoft.com/graph/api/connectedorganization-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ConnectedOrganizationItemRequestBuilderGetQueryParameters> | undefined) : Promise<ConnectedOrganization | undefined>;
    /**
     * Update a connectedOrganization object to change one or more of its properties.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ConnectedOrganization
     * @see {@link https://learn.microsoft.com/graph/api/connectedorganization-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: ConnectedOrganization, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ConnectedOrganization | undefined>;
    /**
     * Delete a connectedOrganization object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Retrieve the properties and relationships of a connectedOrganization object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ConnectedOrganizationItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update a connectedOrganization object to change one or more of its properties.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: ConnectedOrganization, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve the properties and relationships of a connectedOrganization object.
 */
export interface ConnectedOrganizationItemRequestBuilderGetQueryParameters {
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
const ConnectedOrganizationItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ConnectedOrganizationItemRequestBuilderNavigationMetadata: Record<Exclude<keyof ConnectedOrganizationItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    externalSponsors: {
        uriTemplate: ExternalSponsorsRequestBuilderUriTemplate,
        requestsMetadata: ExternalSponsorsRequestBuilderRequestsMetadata,
        navigationMetadata: ExternalSponsorsRequestBuilderNavigationMetadata,
    },
    internalSponsors: {
        uriTemplate: InternalSponsorsRequestBuilderUriTemplate,
        requestsMetadata: InternalSponsorsRequestBuilderRequestsMetadata,
        navigationMetadata: InternalSponsorsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ConnectedOrganizationItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
    },
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createConnectedOrganizationFromDiscriminatorValue,
        queryParametersMapper: ConnectedOrganizationItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createConnectedOrganizationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeConnectedOrganization,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ConnectedOrganizationItemRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */