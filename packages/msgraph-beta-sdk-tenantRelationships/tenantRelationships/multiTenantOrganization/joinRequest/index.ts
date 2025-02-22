/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createMultiTenantOrganizationJoinRequestRecordFromDiscriminatorValue, serializeMultiTenantOrganizationJoinRequestRecord, type MultiTenantOrganizationJoinRequestRecord } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the joinRequest property of the microsoft.graph.multiTenantOrganization entity.
 */
export interface JoinRequestRequestBuilder extends BaseRequestBuilder<JoinRequestRequestBuilder> {
    /**
     * Get the status of a tenant joining a multi-tenant organization.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MultiTenantOrganizationJoinRequestRecord>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/multitenantorganizationjoinrequestrecord-get?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<JoinRequestRequestBuilderGetQueryParameters> | undefined) : Promise<MultiTenantOrganizationJoinRequestRecord | undefined>;
    /**
     * Join a multi-tenant organization, after the owner of the multi-tenant organization adds your tenant to the multi-tenant organization as pending. Before a tenant added to a multi-tenant organization can participate in the multi-tenant organization, the administrator of the joining tenant must submit a join request. To allow for asynchronous processing, you must wait a minimum of 2 hours between creation and joining a multi-tenant organization. Furthermore, to allow for asynchronous processing, you must wait up to 4 hours before joining a multi-tenant organization is completed.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MultiTenantOrganizationJoinRequestRecord>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/multitenantorganizationjoinrequestrecord-update?view=graph-rest-beta|Find more info here}
     */
     patch(body: MultiTenantOrganizationJoinRequestRecord, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MultiTenantOrganizationJoinRequestRecord | undefined>;
    /**
     * Get the status of a tenant joining a multi-tenant organization.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<JoinRequestRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Join a multi-tenant organization, after the owner of the multi-tenant organization adds your tenant to the multi-tenant organization as pending. Before a tenant added to a multi-tenant organization can participate in the multi-tenant organization, the administrator of the joining tenant must submit a join request. To allow for asynchronous processing, you must wait a minimum of 2 hours between creation and joining a multi-tenant organization. Furthermore, to allow for asynchronous processing, you must wait up to 4 hours before joining a multi-tenant organization is completed.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: MultiTenantOrganizationJoinRequestRecord, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get the status of a tenant joining a multi-tenant organization.
 */
export interface JoinRequestRequestBuilderGetQueryParameters {
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
 * Uri template for the request builder.
 */
export const JoinRequestRequestBuilderUriTemplate = "{+baseurl}/tenantRelationships/multiTenantOrganization/joinRequest{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const JoinRequestRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const JoinRequestRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: JoinRequestRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMultiTenantOrganizationJoinRequestRecordFromDiscriminatorValue,
        queryParametersMapper: JoinRequestRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: JoinRequestRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMultiTenantOrganizationJoinRequestRecordFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMultiTenantOrganizationJoinRequestRecord,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
