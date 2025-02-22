/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAccessPackageSubjectFromDiscriminatorValue, serializeAccessPackageSubject, type AccessPackageSubject } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the subjects property of the microsoft.graph.entitlementManagement entity.
 */
export interface SubjectsWithObjectIdRequestBuilder extends BaseRequestBuilder<SubjectsWithObjectIdRequestBuilder> {
    /**
     * Delete navigation property subjects for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Represents the subjects within entitlement management.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AccessPackageSubject>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<SubjectsWithObjectIdRequestBuilderGetQueryParameters> | undefined) : Promise<AccessPackageSubject | undefined>;
    /**
     * Update an existing accessPackageSubject object to change the subject lifecycle.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AccessPackageSubject>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/accesspackagesubject-update?view=graph-rest-beta|Find more info here}
     */
     patch(body: AccessPackageSubject, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AccessPackageSubject | undefined>;
    /**
     * Delete navigation property subjects for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Represents the subjects within entitlement management.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SubjectsWithObjectIdRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update an existing accessPackageSubject object to change the subject lifecycle.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: AccessPackageSubject, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Represents the subjects within entitlement management.
 */
export interface SubjectsWithObjectIdRequestBuilderGetQueryParameters {
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
export const SubjectsWithObjectIdRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/entitlementManagement/subjects(objectId='{objectId}'){?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const SubjectsWithObjectIdRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SubjectsWithObjectIdRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: SubjectsWithObjectIdRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: SubjectsWithObjectIdRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAccessPackageSubjectFromDiscriminatorValue,
        queryParametersMapper: SubjectsWithObjectIdRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: SubjectsWithObjectIdRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAccessPackageSubjectFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAccessPackageSubject,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
