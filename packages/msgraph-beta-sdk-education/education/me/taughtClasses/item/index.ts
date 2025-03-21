/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createEducationClassFromDiscriminatorValue, type EducationClass } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the taughtClasses property of the microsoft.graph.educationUser entity.
 */
export interface EducationClassItemRequestBuilder extends BaseRequestBuilder<EducationClassItemRequestBuilder> {
    /**
     * Classes for which the user is a teacher.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EducationClass>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<EducationClassItemRequestBuilderGetQueryParameters> | undefined) : Promise<EducationClass | undefined>;
    /**
     * Classes for which the user is a teacher.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<EducationClassItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Classes for which the user is a teacher.
 */
export interface EducationClassItemRequestBuilderGetQueryParameters {
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
export const EducationClassItemRequestBuilderUriTemplate = "{+baseurl}/education/me/taughtClasses/{educationClass%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const EducationClassItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const EducationClassItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: EducationClassItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEducationClassFromDiscriminatorValue,
        queryParametersMapper: EducationClassItemRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
